// ChatGPT generated as I do not want to deal with regex and tokenizing for a portfolio website or have extra dependencies
export default function CodeBlock({ code }: { code: string }) {
    // Regex to capture keywords, strings, and object keys
    const tokenRegex =
        /\b(const|let|var|function|return|if|else|for|while|switch|case|break|import|from|export|class|extends|new|this|super|try|catch|finally|throw)\b|(["'`])(?:\\.|[^\\])*?\2|\b([a-zA-Z_][a-zA-Z0-9_]*)\s*:/g;

    const tokens: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;

    while ((match = tokenRegex.exec(code)) !== null) {
        // Push plain text before match
        if (match.index > lastIndex) {
            tokens.push(
                <span key={lastIndex}>{code.slice(lastIndex, match.index)}</span>
            );
        }

        if (match[1]) {
            // Keyword
            tokens.push(
                <span key={match.index} className="text-accent-dark dark:text-accent font-semibold">
                    {match[1]}
                </span>
            );
        } else if (match[2]) {
            // String
            tokens.push(
                <span key={match.index} className="text-accent dark:text-accent-light">
                    {match[0]}
                </span>
            );
        } else if (match[3]) {
            // Object key (exclude colon)
            tokens.push(
                <span key={match.index} className="text-accent-dark dark:text-accent font-medium">
                    {match[3]}
                </span>
            );
            tokens.push(":");
        }

        lastIndex = tokenRegex.lastIndex;
    }

    // Push remaining text
    if (lastIndex < code.length) {
        tokens.push(<span key={lastIndex}>{code.slice(lastIndex)}</span>);
    }

    return (
        <pre className="bg-accent-dark/10 dark:bg-bg-dark p-4 rounded-xl overflow-x-auto">
            <code>{tokens}</code>
        </pre>
    );
};

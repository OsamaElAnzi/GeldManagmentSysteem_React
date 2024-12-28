export function calculateSaldo(transactions = []) {
    const totalInkomen = transactions
        .filter((t) => t.type === "INKOMEN")
        .reduce((sum, t) => sum + t.bedrag, 0);

    const totalUitgaven = transactions
        .filter((t) => t.type === "UITGAVEN")
        .reduce((sum, t) => sum + t.bedrag, 0);

    return (totalInkomen - totalUitgaven).toFixed(2);
}

export function sortTransactions(transactions = []) {
    return [...transactions].sort((a, b) => new Date(a.datum) - new Date(b.datum));
}

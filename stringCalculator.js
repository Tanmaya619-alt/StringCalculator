function add(numbers) {
    if (!numbers) return 0;

    let delimiter = ",";
    
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = parts[0].slice(2);
        numbers = parts.slice(1).join("\n");
    }

    numbers = numbers.replace(/\n/g, delimiter);
    const numList = numbers.split(delimiter);

    let total = 0;
    const negatives = [];

    for (let num of numList) {
        const trimmedNum = num.trim();
        if (trimmedNum) {
            const number = parseInt(trimmedNum, 10);
            if (number < 0) {
                negatives.push(number);
            }
            total += number;
        }
    }

    if (negatives.length > 0) {
        throw new Error("negative numbers not allowed: " + negatives.join(", "));
    }

    return total;
}

module.exports = { add};
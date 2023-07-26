const expirationId = () => {
    let uniqId;
    const idNumber = Date.now(); 
    const randomNumber = Math.random() / Math.random();
    let totalNum = idNumber + randomNumber;
    uniqId = totalNum
    return uniqId; 
}

export default expirationId;
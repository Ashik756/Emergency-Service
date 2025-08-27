// "heart" ক্লাসযুক্ত সব এলিমেন্টকে সিলেক্ট করা হলো
const hearts = document.getElementsByClassName("heart");
//Call data 
const callData = [];

// প্রতিটি এলিমেন্টের উপর লুপ চালিয়ে লিসেনার যোগ করা হচ্ছে
for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener("click", function () {
        // ভেতরের কোড ঠিক আছে
        const heartCount = parseInt(document.getElementById("heartCount").innerText);
        const totalHeartCount = heartCount + 1;
        document.getElementById("heartCount").innerText = totalHeartCount;
    });
}


const naEmNum = document.getElementById("naEmNum").innerText;
document.getElementById('btnNaEm').addEventListener("click", function () {
    navigator.clipboard.writeText(naEmNum);
    const copy = parseInt(document.getElementById("copyCount").innerText);
    alert("নাম্বার কপি হয়েছে, 999");
    const newCopy = copy + 1;
    document.getElementById("copyCount").innerText = newCopy;
})
document.getElementById("btnNaEmCall").addEventListener("click", function () {
    const naEmCall = parseInt(document.getElementById("coinCount").innerText);
    if (naEmCall < 20) {
        alert("আপনার পর্যাপ্ত কয়েন নেই কল করতে কমপক্ষে ২০ কয়েন লাগবে");
        return;
    }
    const coinCount = naEmCall - 20;
    document.getElementById("coinCount").innerText = coinCount;
    
    alert("📞 Calling National Emergency, 999");
    
    const data = {
        name: "জাতীয় জরুরি সেবা",
        time: Date().toLocaleString()
    }
    callData.push(data);
    console.log(callData);

})
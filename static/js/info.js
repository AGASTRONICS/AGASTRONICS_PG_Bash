choiceInfo = `Choice Coin is an Algorand Standard Asset that powers Decentralized Decisions, a voting and governance software built directly on the Algorand Blockchain. Decentralized Decisions enables organizations to make governance decisions in an open and decentralized manner. For the Choice Coin DAO, Decentralized Decisions leverages Proof-of-Participation as a governance mechanism, allowing voters to have a larger say in direct proportion to their contribution to the network.`
quoteBtn = document.querySelector(".quote"),
speechBtn = document.querySelector(".speech"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter"),
synth = speechSynthesis;

speechBtn.addEventListener("click", ()=>{
        let utterance = new SpeechSynthesisUtterance(`${choiceInfo}`);
        synth.speak(utterance);
        setInterval(()=>{
            !synth.speaking ? speechBtn.classList.remove("active") : speechBtn.classList.add("active");
        }, 10);
});

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(choiceInfo);
});

twitterBtn.addEventListener("click", ()=>{
    let tweetUrl = `https://twitter.com/ChoiceCoinNews`;
    window.open(tweetUrl, "_blank");
});

quoteBtn.addEventListener("click", randomQuote);
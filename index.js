let c = 0;
const observer = new MutationObserver(() => {
    const difficultyTag = document.querySelector("div > div.flex.w-full.flex-1.flex-col.gap-4.overflow-y-auto.px-4.py-5 > div.flex.gap-1 > div");
    console.log(c);
    c += 1;
    if (difficultyTag) {
        difficultyTag.remove();
        observer.disconnect(); // Stop observing after the element is found and removed
    }

});
setTimeout(() => { observer.disconnect() }, 3000);

observer.observe(document.body, { childList: true, subtree: true });
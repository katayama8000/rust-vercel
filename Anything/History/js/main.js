console.log("main.js loaded");

const length = () => {
    console.log("length");
    console.log(window.history.length);
}

const back = () => {
    console.log("back");
    history.back();
}

const forward = () => {
    console.log("forward");
    history.forward();
}

const go = () => {
    console.log("go");
    history.go();
}

const checkState = () => {
    console.log("state");
    console.log(window.history.state);
}

const pushState = () => {
    console.log("pushState");
    history.pushState({ name: "katayama" }, null, "?page=1")
}

const replaceState = () => {
    console.log("replaceState");
    history.replaceState({ name: "okuda" }, null, "?page=2")
}

window.addEventListener('popstate', function (event) {
    const state = event.state;
    alert(state.name)
});
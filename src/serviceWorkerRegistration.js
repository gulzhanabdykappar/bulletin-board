// serviceWorkerRegistration.js

export function register() {
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker.register("/serviceWorker.js").then((registration) => {
                console.log("Service worker registered with scope:", registration.scope);
            }).catch((error) => {
                console.error("Service worker registration failed:", error);
            });
        });
    } else {
        console.log("Service workers are not supported in this browser.");
    }
}

export function unregister() {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.ready.then((registration) => {
            registration.unregister().then(() => {
                console.log("Service worker unregistered.");
            });
        });
    } else {
        console.log("Service workers are not supported in this browser.");
    }
}

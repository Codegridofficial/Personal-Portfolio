"use client";

export function setupRedirectOnClick(router, buttonIds) {
    buttonIds.forEach(id => {
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener("click", () => {
                const path = button.getAttribute("data-path");
                if (path) {
                    router.replace(path)
                };
            });
        };
    });
}



export function InstantRedirect(router) {
    router.replace("/home")
};
/* ==========================================
   Navigation
========================================== */

import { navigate } from "./router.js";

export function initNavigation(){

    const buttons =
    document.querySelectorAll(".nav-btn");

    buttons.forEach(button=>{

        button.addEventListener("click",()=>{

            buttons.forEach(btn=>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            navigate(button.dataset.page);

        });

    });

                            }

document.addEventListener("keypress",function (e){
        if(e.code=="KeyA"){
            let audio1 = new Audio("A.mp3");
            audio1.play();
        }else if(e.code=="KeyS"){
            let audio2 = new Audio("S.mp3");
            audio2.play();
        }else if(e.code=="KeyD"){
            let audio3 = new Audio("D.mp3");
            audio3.play();
        }else if(e.code=="KeyF"){
            let audio4 = new Audio("F.mp3");
            audio4.play();
        }else if(e.code=="KeyG"){
            let audio5 = new Audio("G.mp3");
            audio5.play();
        }else if(e.code=="KeyH"){
            let audio6 = new Audio("H.mp3");
            audio6.play();
        }else if(e.code=="KeyJ"){
            let audio7 = new Audio("J.mp3");
            audio7.play();
        }else if(e.code=="KeyW"){
            let audio8 = new Audio("W.mp3");
            audio8.play();
        }else if(e.code=="KeyE"){
            let audio9 = new Audio("E.mp3");
            audio9.play();
        }else if(e.code=="KeyT"){
            let audio10 = new Audio("T.mp3");
            audio10.play();
        }else if(e.code=="KeyY"){
            let audio11 = new Audio("Y.mp3");
            audio11.play();
        }else if(e.code=="KeyU"){
            let audio12 = new Audio("U.mp3");
            audio12.play();
        }else {
        console.warn("Warning Press A,S,D,F,G,H,J,W,E,T,Y,U ONLY!!\n\tTO PLAY THE PIANO");
    }
});
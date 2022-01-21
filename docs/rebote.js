const d=document;
export default function rebote(cruz, contenedor, start, stop,reset,less,more,msj){
   let $contenedor = d.querySelector(contenedor),
     $cruz = d.querySelector(cruz),
     $start = d.getElementById(start),
     $stop = d.getElementById(stop),
     xx = 3,
     x = 0,
     yy = 2,
     y = 0,
     delta = 5,
     giro = 5,
     move = "",
     saludo = [
       "Hola,",
       "Me trasnoché y salió esto",
       "En realidad fueron",
       "2 trasnochadas",
        "seguidas.",
       "Pero estoy contento",
       "Porque empecé hace poco",
       "Y esto me costó bastante",
       "Espero que les guste",
       "(esto no desaparece</br>ni se repite)",
     ],
     rojo=252,
     changeRojo=1,
     verde=2,
     changeVerde=2,
     azul=200,
     changeAzul=3,
     $width=3,
     $height=2,
     alto=0.02,
     ancho=-0.0333,
     saludar=''

setTimeout(() => {
   let i=0
   setTimeout(() => {
      clearInterval(saludar)
   }, saludo.length*1500+100);
   const saludar=setInterval(() => {
      d.querySelector(msj).innerHTML=saludo[i];
      i++;      
   }, 1500);
}, 2000);

   d.querySelector(less).disabled = true;

   d.addEventListener(('click'),(e)=>{

      if (e.target.matches(more)) {
        d.querySelector(less).disabled = false,
         giro=giro+2;

         if(xx<0){ xx=xx-1.5;
            }else{xx=xx+1.5}
        
         if (yy < 0) {
           yy = yy-1;
         } else {
           yy = yy + 1;
         };
         if (Math.abs(yy) > 6) {
           d.querySelector(more).disabled = true;
         } else {
      }
      }

      if (e.target.matches(less)) {
        (d.querySelector(more).disabled = false),
        (giro = giro - 2);
        if (xx < 0) {
          xx = xx + 1.5;
        } else {
          xx = xx - 1.5;
        }
        if (yy < 0) {
          yy = yy + 1;
        } else {
          yy = yy - 1;
        }

        if (Math.abs(yy) < 3) {
          d.querySelector(less).disabled = true;
        }
      }

      if(e.target.matches(start)){
         d.querySelector(start).disabled=true,

         move=setInterval(() => {
            d.querySelector(cruz).style.color = `rgb(${rojo},${verde},${azul})`;
            rojo+=changeRojo
            verde+=changeVerde
            azul+=changeAzul
            if(rojo===254||rojo===0) changeRojo=-changeRojo
            if(verde===254||verde===0) changeVerde=-changeVerde
            if(azul===254||azul===0) changeAzul=-changeAzul

            console.log("rojo", rojo, "verde", verde)

            d.querySelector(cruz).style.height =`${$height}rem`
            $height+=alto
            if($height<2||$height>4.5) alto=-alto
            d.querySelector(cruz).style.width =`${$width}rem`
            $width+=ancho
            if($width<2||$width>4.5) ancho=-ancho
            

              $cruz.style.transform = `translate(${x}px,${y}px) rotate(${delta}deg)`;
            delta=delta+giro;
            x=x+xx;
            y=y+yy;
           
            let limitsStage = $contenedor.getBoundingClientRect(),
            limitsCruz = $cruz.getBoundingClientRect();
            if(limitsCruz.bottom>limitsStage.bottom)yy=-Math.abs(yy);
            if(limitsCruz.top<limitsStage.top)yy = Math.abs(yy);
            if(limitsCruz.left<limitsStage.left)xx = Math.abs(xx);
            if(limitsCruz.right>limitsStage.right)xx = -Math.abs(xx);
            }, 20);
      };
      if(e.target.matches(stop)){
         (d.querySelector(start).disabled = false),
         clearInterval(move);
      }
      if(e.target.matches(reset)){
         (d.querySelector(start).disabled = false),
         clearInterval(move)
         xx=3
         yy=2
         rojo=252,
         changeRojo=1,
         verde=2,
         changeVerde=2,
         azul=200,
         changeAzul=3,
         $width=3,
         $height=2,
         alto=0.02,
         ancho=-0.0333,
         delta = 5,
         giro = 5,
         d.querySelector(less).disabled = true,
         d.querySelector(more).disabled = false,
         $cruz.style.transform=`translate(0px,0px)`,
         d.querySelector(cruz).style.color = `rgb(${rojo},${verde},${azul})`,
         d.querySelector(cruz).style.height = `${$height}rem`,
         d.querySelector(cruz).style.width =`${$width}rem`
         x=0,
         y=0;
      }

      
});
}

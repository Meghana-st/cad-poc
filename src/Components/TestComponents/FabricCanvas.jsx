import {fabric} from "fabric";
import { useEffect, useRef } from "react";

const FabricCanvas = () =>{

    const canvasRef = useRef(null);
    //const canvas = new fabric.Canvas(canvasRef.current);

    useEffect(()=>{
        const canvas = new fabric.Canvas(canvasRef.current);

        const circle = new fabric.Circle({
            radius : 30,
            left : 30,
            top : 150,
            fill : "transparent",
            stroke : "black"
        });

        const rect = new fabric.Rect({
            left: 180,
            top: 150,
            fill: 'red',
            width: 20,
            height: 20,
            angle: 45,
            fill : "transparent",
            stroke : "black"
          });
          
          canvas.add(rect);

        canvas.add(circle);
    }, []);

    return(<canvas 
        ref={canvasRef}
        width={200}
        height={200}
        style={{border : "2px solid green"}}></canvas>)

}

export default FabricCanvas;
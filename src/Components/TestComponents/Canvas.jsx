import { useRef, useEffect } from "react";

const Canvas = () =>{

    const canvasRef = useRef(null);

    useEffect(()=>{
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        // first draw
        context.fillStyle = '#000000'
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    },[]);

    const CustomDraw = () => {

    };

    return(<div>
        <canvas 
            ref={canvasRef}
            width={200}
            height={200}
            style={{ border: '2px solid black' }}
        />
    </div>);
}

export default Canvas;
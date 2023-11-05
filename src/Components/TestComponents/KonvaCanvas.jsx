import { useState } from 'react';
import { Stage, Layer, Rect, Circle, Text, Line, Ellipse, RegularPolygon, Arc } from 'react-konva';

const KonvaCanvas = () => {

    const [position, setPosition] = useState({x:"", y:""});
    const [isDrawing, setIsDrawing] = useState(false);
    const [lines, setLines] = useState([]);
    const [startPoint, setStartPoint] = useState({ x: 0, y: 0 });

    const getCoordinates = (event) => {
        const stage = event.target.getStage();
        const pointerPosition = stage.getPointerPosition();
        setPosition({x:Math.round(pointerPosition.x),y:Math.round(pointerPosition.y)})
    }

    const startDrawing = (event) =>{
        setIsDrawing(true);
        const pos = event.target.getStage().getPointerPosition();
        console.log(pos);
        setStartPoint({ x: pos.x, y: pos.y });
        setLines([...lines, {points:[pos.x,pos.y]}])
    }

    const draw = (event) =>{

        if(!isDrawing)
        {
            return;
        }

        const stage = event.target.getStage();
        const pointerPos = stage.getPointerPosition();
        const lastLine = lines[lines.length - 1];
        //console.log(pointerPos);
        if (lastLine) {
        // Update the last line with the new point
        lastLine.points = lastLine.points.concat([pointerPos.x, pointerPos.y]);
        // Replace the last line with the updated points
        setLines([...lines.slice(0, -1), lastLine]);
    }
    }

    const straightLineDraw = (event) =>{
        if (!isDrawing) return;

        const stage = event.target.getStage();
        const pointerPos = stage.getPointerPosition();
        const lastLine = lines[lines.length - 1];
        //console.log(pointerPos);
        if (lastLine) {
        // Update the last line with the new point
        lastLine.points = [startPoint.x, startPoint.y,pointerPos.x, pointerPos.y];
        // Replace the last line with the updated points
        setLines([...lines.slice(0, -1), lastLine]);}
    }

    const finishDrawing = (event) =>{
        const currentPos = event.target.getStage().getPointerPosition();
         //console.log("curr:", currentPos);
        if(currentPos.x === startPoint.x && currentPos.y === startPoint.y)
        {
            console.log("curr:", currentPos);
            const lastLine = lines[lines.length - 1];
            if (lastLine) {
            lastLine.points = [startPoint.x, startPoint.y];
            setLines([...lines.slice(0, -1), lastLine]);
            }
        }
        setIsDrawing(false);
        console.log(lines);
    }

    return(
        <Stage width={250} height={250} style={{ border: '3px solid black' }} 
        //onMouseMove={getCoordinates}
        onMouseMove={straightLineDraw}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        >
        <Layer>
            <Rect 
                x={10}
                y={20}
                width={100}
                height={40}
                stroke="black"
            />
             <Circle 
                x={150} 
                y={35} 
                radius={30} 
                stroke="black"
            />
            <Ellipse
                x={40}
                y={100}
                radiusX={30}
                radiusY={20}
                stroke="black"
            />
            <RegularPolygon 
                x={150}
                y={100}
                sides={5}
                radius={30}
                stroke="black"
            />
            <Line 
                points={[5, 170, 120, 154, 70, 189]} //x1,y1,x2,y2...
                stroke="black"
                lineCap= "round"
                lineJoin="round"
                tension={1}
            />
            <Arc 
                x={150}
                y={150}
                innerRadius={40}
                angle={60}
                stroke="black"
            />
            <Text 
                x={20}
                y={220}
                text={"Cursor coordinates: "+ position.x + "," + position.y}
            />
            {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="black"
              strokeWidth={3}
              //tension={0.5}
              lineCap="round"
              draggable={true}
              //globalCompositeOperation="source-over"
            />
          ))}
        </Layer>
        </Stage>
    );

}

export default KonvaCanvas;
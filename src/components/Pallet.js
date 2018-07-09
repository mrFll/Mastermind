import React,{Component} from 'react';
import '../style/palletStyle.css'
/**
 * this is pallet component that contain piece colors in it
 */
class Pallet extends Component{

    render(){
        return(
            <div>
                <button id={"purple"}/>
                <button id={"blue"}/>
                <button id={"green"}/>
                <button id={"yellow"}/>
                <button id={"red"}/>
            </div>
        );
    }
}

export default Pallet;
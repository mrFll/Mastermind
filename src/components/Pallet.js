import React,{Component} from 'react';
import '../style/palletStyle.css'
/**
 * this is pallet component that contain piece colors in it
 */
class Pallet extends Component{

    render(){
        return(
            <div>
                <button className={"circle_button"} id={"purple"}/>
                <button className={"circle_button"} id={"blue"}/>
                <button className={"circle_button"} id={"green"}/>
                <button className={"circle_button"} id={"yellow"}/>
                <button className={"circle_button"} id={"red"}/>
            </div>
        );
    }
}

export default Pallet;
import React,{Component} from 'react';
import '../style/palletStyle.css'
/**
 * this is pallet component that contain piece colors in it
 */
class Pallet extends Component{
    render(){
        return(
            <div>

                <button onClick={()=> {

                }} className={"circle_button"} id={"purple"}/>


                <button onClick={() => {

                }} className={"circle_button"} id={"blue"}/>


                <button onClick={() => {

                }} className={"circle_button"} id={"green"}/>


                <button onClick={() => {

                }} className={"circle_button"} id={"yellow"}/>


                <button onClick={()=> {

                }} className={"circle_button"} id={"red"}/>

                <button id={"check_btn"} onClick={() =>{

                    const tempActiveRow = this.props.activeRow;
                    const crc = this.props.crc;
                    const r = this.props.r;
                    const rs = this.props.rs;

                    for(var i= 0; i<4; i++){
                        if(crc[tempActiveRow][i]=== r[i]){
                            rs[tempActiveRow][i] = 1; // place and color is correct
                        }else{
                            for(var j = 0; j<4; j++){
                                if(crc[tempActiveRow][i] === r[j]){
                                    rs[tempActiveRow][i] = 2; // color is valid
                                }
                            }
                        }
                      }
                      // TODO change elements color
                      //activeRow++; // change active row to


                }}>Check</button>
            </div>
        );
    }
}

export default Pallet;
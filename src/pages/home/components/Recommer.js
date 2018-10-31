import React,{ PureComponent } from 'react'
import { RecommerWrapper } from '../style'
import { Link } from 'react-router-dom'
class Recommer extends PureComponent {
    render () {
        return (
            <RecommerWrapper>
                <Link to="/"><img src={require("../../../statics/1.png")} alt="" /></Link>
                <Link to="/"><img src={require("../../../statics/2.png")} alt="" /></Link>
                <Link to="/"><img src={require("../../../statics/3.png")} alt="" /></Link>
                <Link to="/"><img src={require("../../../statics/4.png")} alt="" /></Link>
                <Link to="/"><img src={require("../../../statics/5.png")} alt="" /></Link>
            </RecommerWrapper>
        )
    }
}

export default Recommer
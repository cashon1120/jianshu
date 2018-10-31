import React, { PureComponent } from 'react'
import { LoadingWrapper } from './style'

class Loading extends PureComponent {
    render(){
        return (
            <LoadingWrapper className="loading">loading</LoadingWrapper>
        )
    }
}
export default Loading
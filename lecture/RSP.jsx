import React, {Component} from 'react';

class RSP extends Component {
    state= {
        result: '',
        score:0,
        imgCoord:0,
    };

    componentDidMount() { // 컴포넌트가 첫 렌더링된 후

    }

    componentDidUpdate() { // 리렌더링

    }

    componentWillUnmount() { // 컴포넌트가 제거되기 전

    }

    render() {
        const {result, score, imgCoord} = this.state;
        return (
            <>
        <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
        <div>
          <button id="rock" className="btn" onClick={this.onClickBtn('바위')}>바위</button>
          <button id="scissor" className="btn" onClick={this.onClickBtn('가위')}>가위</button>
          <button id="paper" className="btn" onClick={this.onClickBtn('보')}>보</button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
        );
    }
}
export default RSP;
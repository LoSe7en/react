import React, {Component} from 'react';

class TodoFooter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-offset-4 col-md-4">
                    <div className="pull-left">
                        <button type="button" className="btn btn-info btn-xs">全部</button>
                        <button type="button" className="btn btn-success btn-xs">已完成</button>
                        <button type="button" className="btn btn-warning btn-xs">未完成</button>
                    </div>

                    <span className="pull-right">该项共有 12 条任务</span>
                </div>
            </div>
        )
    }
}

export default TodoFooter;
import React, {Component} from 'react';

class TodoFooter extends Component {

    state = {
        filter: 'all'
    };

    todoListFilter = (filter) => {
        this.setState({
            filter
        }, () => {
            this.props.todoListFilter(filter);
        })
    };

    render() {
        let {filter} = this.state;
        return (
            <div className="row">
                <div className="col-md-offset-4 col-md-4">
                    <div className="pull-left">
                        <button onClick={this.todoListFilter.bind(null, 'all')} type="button" className={filter === 'all'? 'btn btn-info btn-xs':'btn btn-xs'}>全部</button>
                        <button onClick={this.todoListFilter.bind(null, 'component')} type="button" className={filter === 'component'? 'btn btn-success btn-xs':'btn btn-xs'}>已完成</button>
                        <button onClick={this.todoListFilter.bind(null, 'active')} type="button" className={filter === 'active'? 'btn btn-warning btn-xs':'btn btn-xs'}>未完成</button>
                    </div>

                    <span className="pull-right">该项共有 {this.props.data.length} 条任务</span>
                </div>
            </div>
        )
    }
}

export default TodoFooter;
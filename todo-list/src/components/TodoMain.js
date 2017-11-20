import React, {Component} from 'react';

class TodoMain extends Component {

    state = {
        mission: ''
    };

    saveMission = (e) => {
        if(e.keyCode === 13) {
            this.props.addMission(e.target.value);
            e.target.value = '';
        }
    };

    delMission = (index) => {
        this.props.delMission(index);
    };

    componentMission = (id) => {
        this.props.componentMission(id);
    };

    render() {
        return (
            <div className="row">
                <div className="col-md-offset-4 col-md-4">
                    <input type="text" className="form-control" onKeyUp={this.saveMission} placeholder="请输入任务名称" />
                    <table className="table table-striped">
                        <tbody>
                            {this.props.data.map((todo, index) => {
                                //return后面加小括号，代表所返回的是一个整体，当被返回的数据是一行时，小括号可省略
                                return (
                                    <UserItem
                                        delMission={this.delMission}
                                        componentMission={this.componentMission}
                                        key={index}
                                        curId={todo.id}
                                        data={todo}
                                    />
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    };
}

class UserItem extends Component {

    delMission = () => {
        if(window.confirm('确认删除该项？')) {
            this.props.delMission(this.props.index);
        }
    };

    componentMission = () => {
        this.props.componentMission(this.props.curId);
    };

    render() {
        let user = this.props.data;
        return (
            <tr>
                <td><input onChange={this.componentMission} checked={user.isComponent} className="cur" type="checkbox"/></td>
                <td><span className={user.isComponent? 'component': ''}>{user.text}</span></td>
                <td width="30">
                    <span onClick={this.delMission} className="cur glyphicon glyphicon-remove"></span>
                </td>
            </tr>
        )
    }
}

export default TodoMain;
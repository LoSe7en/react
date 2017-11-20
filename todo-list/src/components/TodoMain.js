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

    componentMission = (e) => {
        this.props.componentMission();
    };

    componentWillReceiveProps = () => {

    };

    render() {
        console.log(this.props.data);
        return (
            <div className="row">
                <div className="col-md-offset-4 col-md-4">
                    <input type="text" className="form-control" onKeyUp={this.saveMission} placeholder="请输入任务名称" />
                    <table className="table table-striped">
                        <tbody>
                            {
                                this.props.data.map((todo, index) => {
                                    return <UserItem key={index} data={todo} />
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    };
}

class UserItem extends Component {
    render() {
        let user = this.props.data;
        return (
            <tr onDoubleClick={this.componentMission}>
                <td><input type="checkbox"/></td>
                <td>{user.text}</td>
                <td>
                    <span className="glyphicon glyphicon-remove"></span>
                </td>
            </tr>
        )
    }
};

export default TodoMain;
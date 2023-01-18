const Task = (props) => {

    return (

    <div className='task' id={props.task.id}>
        <h2 className={props.status}>{props.task.title}</h2>
        <div className='actions'>
          <i className='fa fa-remove remove' 
          onClick={() => props.removeTask(props.task.id)}
          />


          {props.status == 'neatlikta' ? <i className='fa fa-check check'
          onClick={() => props.changeStatus(props.task.id)}
          /> : null}
        </div>
    </div>

    )
}

export default Task
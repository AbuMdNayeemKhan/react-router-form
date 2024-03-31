const SubmitForm = () => {
    const handelSubmit = (e) =>{
        e.preventDefault();
        console.log(e.target);
        console.log('form Submited');
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input type="text" placeholder="Enter your name"/>
                <br />
                <input type="text" placeholder="Enter your email"/>
                <br />
                <button>submit</button>
            </form>
        </div>
    );
};
export default SubmitForm;
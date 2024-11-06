const Dropdown = (props) => {
    return (
        <div className="relative z-0 w-full mb-6 group">
            <label className="text-sm text-gray-600 mb-2"><b>Role</b></label>
            <select name="role" className="w-full border border-gray-300 rounded py-2 px-3" onChange={props.onChange} required>
                <option value="">Pilih Role</option>
                <option value="Users">Users</option>
                <option value="Driver">Driver</option>
            </select>
        </div>
    );
};

export default Dropdown;
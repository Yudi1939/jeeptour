const FileInput = (props) => {
    const { name, onChange, label } = props;

    return (
        <div className="mb-4">
            {label && <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-1"><b>{label}</b></label>}
            <input
                type="file"
                accept="image/*" // Menerima hanya file gambar
                className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
                name={name}
                id={name}
                onChange={onChange} // Memanggil fungsi onChange dari props
            />
        </div>
    );
};

export default FileInput;
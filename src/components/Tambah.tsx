const FormTambah = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white shadow-md rounded pc-8 pt-6 mb-4 w-full max-w-md">
            <h2 className="text-3x1 font-bold mb-6 text-center text-white">
                <span className="bg-gradient-to--r text-transparent from-yellow-500 to-yellow-700 bg-clip-text">
                    Tambah barang
                </span>
            </h2>
            <form>
                <div className="mb-6">
                    <label htmlFor="Nama Barang"
                    className="block text-gray-600 text-sm font-bold mb-2">
                        Nama barang
                    </label>
                </div>
            </form>
        </div>
    </div>
    )
}
export default FormTambah;
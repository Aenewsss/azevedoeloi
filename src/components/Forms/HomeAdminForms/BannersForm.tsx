export default function BannersForm() {
    return (
        <form className="d-flex">

            <div className="form-floating mb-3 w-100">
                <input
                    type="text"
                    className="form-control"
                    name="formId1"
                    id="formId1"
                    placeholder=""
                />
                <label htmlFor="formId1">Name</label>
            </div>
        </form>

    )

}
function ChatForm() {
  /**
   *  This component will submit data to the table "users"
   *  It will use react-hook-form
   *
   */
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nume
        </label>
        <input type="text" name="name" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Telefon
        </label>
        <input type="text" name="name" className="form-control" />
      </div>
      <div className="">
        <button type="submit">Incepe conversatia</button>
      </div>
    </form>
  );
}

export default ChatForm;

function BookingForm({selectedSlot}) {
    console.log(selectedSlot);
  return (
    <form className="flex flex-col gap-10">
      <div >
        <label htmlFor="date">date</label>
        <input type="text" name="date" />
      </div>
      <div>
        <label htmlFor="time">time</label>
        <input type="text" name="time" />
      </div>
      <div>
        <label>Category:</label>
        <select name="category" required>
          <option value="badminton">Badminton</option>
          <option value="squash">Squash</option>
          <option value="tennis">Tennis</option>
        </select>
      </div>
      <div>
        <button>submit</button>
      </div>
    </form>
  );
}

export default BookingForm;

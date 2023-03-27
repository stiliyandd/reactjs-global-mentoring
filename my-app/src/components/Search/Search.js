import React, { useCallback, useState } from "react";

import "./Search.scss";

const Search = () => {
//   const dispatch = useDispatch();
  const [value, setValue] = useState("");


  const handleForm = useCallback(
    (event) => {
      event.preventDefault();

    },
  );

  const handleChange = useCallback(({ target: { value } }) => {
    setValue(value);
  }, []);

  return (
    <div className="search">
      <h1 className="search-title">Find your movie</h1>
      <form onSubmit={handleForm}>
        <input type="text" placeholder="What do you want to watch?" value={value} onChange={handleChange} />
        {/* <Button color="primary">search</Button> */}
      </form>
    </div>
  );
};

export default Search;
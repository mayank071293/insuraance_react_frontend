import React, { useState } from "react";
import http from "../../http-common";
import PolicyDesc from "./PolicyDesc";
import SearchBar from "./SearchBar.js";

const Policy = () => {
  const [searchBar, setSearchBar] = useState({
    id: "",
    searchType: "policy_id",
  });
  const [policy, setPolicy] = useState([
    {
      policy_id: "",
      date_of_purchase: "",
      bodily_injury_liability: "",
      personal_injury_protection: "",
      premium: "",
      collision: "",
      comprehensive: "",
      fuel: "",
      vehicle_segment: "",
    },
  ]);

  const Policies = ({ policy }) => (
    <div>
      {policy.map((p) => (
        <div key={p.policy_id}>
          <PolicyDesc {...p} />
        </div>
      ))}
    </div>
  );

  const onInputChange = (e) => {
    const res = setSearchBar({ ...searchBar, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res =
      searchBar.searchType === "policy_id"
        ? await http.get(`policy/policy_id?policy_id=${searchBar.id}`)
        : await http.get(`/policy/customer_id?customer_id=${searchBar.id}`);
    setPolicy((policy) => [...res.data]);
  };

  const onClear = (e) => {
    setSearchBar({
      id: "",
      searchType: "policy_id",
    });
    setPolicy([
      {
        policy_id: "",
        date_of_purchase: "",
        bodily_injury_liability: "",
        personal_injury_protection: "",
        premium: "",
        collision: "",
        comprehensive: "",
        fuel: "",
        vehicle_segment: "",
      },
    ]);
  };

  return (
    <div className="container mt-2">
      <div>
        <SearchBar
          onClick={onSubmit}
          onInputChange={onInputChange}
          id={searchBar.id}
          searchType={searchBar.searchType}
          onClear={onClear}
        />
      </div>
      <div>
        <Policies policy={policy} />
      </div>
    </div>
  );
};
export default Policy;

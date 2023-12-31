"use client";

import { useState, useEffect } from "react";

import PromptCard from "./PromptCard";


const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='gap-2 flex sm:flex-col flex-wrap md:flex-row justify-center items-center md:w-screen'>
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const FeedFirstPage = () => {
  const [allPosts, setAllPosts] = useState([]);

  // Search states - the search bar that will not be present in the first page
  const [searchText, setSearchText] = useState(""); 
  

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();

    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(allPosts);
  

//code for the search bar  

const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allPosts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };



  const handleTagClick = () => {
   
  };

  return (
    <section className='mt-16 mx-auto w-full max-w-xl flex justify-center items-center flex-col gap-2'>
      <form className='relative w-full gap-3 flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
           value={searchText}
          onChange={()=>{}}
          required
          className='search_input peer'
        />
      </form>

      {/* All Prompts */}
      {searchText ? (
        <PromptCardList
         
        />
      ) : (
        <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default FeedFirstPage;
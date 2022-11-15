import React from 'react';
import Header from '../Components/Blocks/Header/Header';
import Light from "../Components/Blocks/Light/Light";
import {address, contacts, organization, requisites} from "../Components/Content";

function Info() {
  return (
    <>
      <Header />
      <Light title={organization.title} list={organization.list} />
      <article>
        <Light title={address.title} list={address.list} display='inline-block' listType='vertical' />
        <Light title={contacts.title} list={contacts.list} display='inline-block' listType='vertical' />
      </article>
      <Light title={requisites.title} list={requisites.list} />
    </>
  );
}

export default Info;
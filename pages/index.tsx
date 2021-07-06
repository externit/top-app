import React, { useState } from 'react';
import { P, Htag, Button , Tag, Rating} from "../components/index";
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { GetStaticProps } from 'next';
import { MenuItem } from '../interfaces/menu.interface';


 function Home({menu , firstCategory}:HomeProps): JSX.Element {
  const [rating , setRating] = useState<number>(1);

  return (
    <>
      <Htag tag='h1'>text</Htag>
      <Button  appearance='primary' arrow='down'>button</Button>
      <Button  appearance='ghost' arrow='right'>button</Button>
      <P size='s'>test</P>
      <P size='m'>test</P>
      <P size='l'>test</P>
      <Tag >adddddd</Tag>
      <Tag color='green' >adddddd</Tag>
      <Rating isEditable={true} rating={rating} setRating={setRating}/>
      <ul>
        {menu.map(e=> <li key={e._id.secondCategory}>{e._id.secondCategory}</li> )

        }
      </ul>
    </>
  );
}

export default withLayout(Home);


export const getStaticProps:GetStaticProps<HomeProps> = async ()=>{
  const firstCategory =  0;
  const {data : menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',{
    firstCategory
  } );
  return{
    props:{
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string , unknown>{
  menu: MenuItem[],
  firstCategory : number
}
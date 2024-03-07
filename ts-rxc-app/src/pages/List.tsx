import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { TableList, type TTableList } from '../components'

export function ListPage() {

  const [tableList, setTableList] = useState<TTableList[]>([]);

  const fetchAccounts = async () => {
    const { data } = await axios.get('http://localhost/api/accounts');
    console.log('data', data.data);
    setTableList(data.data);
  }

  useEffect(() => {
    fetchAccounts();
  },[]);

  return (
    <TableList tableList={tableList} />
  )
}

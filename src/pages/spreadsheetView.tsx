import React from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';

import { NFTs } from '../redux/mocked-data';
import { NFTData } from '../ts-generalTypes/InitialStateInterfaces';
import makeIcon from '../helpers/makeIcon';
import makeBadge from '../helpers/makeBadge';

const SpreadsheetView: React.FC = () => {
  const columns: TableColumn<NFTData>[] = [
    {
      name: 'Project Title',
      selector: (row) => row.title,
      sortable: true,
      maxWidth: '200px',
    },
    {
      name: 'Date',
      selector: (row) => row.date,
      sortable: true,
      maxWidth: '150px',
    },
    {
      name: 'Price',
      cell: (row) => (
        <div>
          {row.price.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      ),
      sortable: true,
      maxWidth: '200px',
    },
    {
      name: 'Type',
      cell: (row) => makeBadge(row.type),
      maxWidth: '100px',
    },
    {
      name: 'Wallet',
      selector: (row) => row.wallet,
      maxWidth: '200px',
    },
    {
      name: 'Social Media',
      cell: (row) => (
        <div className="flex">
          {row.socialMedia.map((item, index) => (
            <div key={index} className="mr-1">
              {makeIcon(item)}
            </div>
          ))}
        </div>
      ),
      maxWidth: '200px',
    },
    {
      name: 'Notes',
      selector: (row) => row.notes,
      maxWidth: '200px',
    },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: '60px',
      },
    },
  };

  return (
    <div className="flex flex-col h-[calc(100%-70px)]">
      <div className="my-1">
        <button className="bg-black text-white font-medium py-3 px-4 rounded-md mr-2">
          + Add Project
        </button>
        <button className="p-3 rounded-xl border-solid border-2 border-black bg-white text-black">
          Filter
        </button>
      </div>
      <DataTable
        columns={columns}
        data={NFTs}
        pagination
        customStyles={customStyles}
      />
    </div>
  );
};

export default SpreadsheetView;

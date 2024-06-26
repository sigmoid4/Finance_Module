'use client';
import {
  Calendar,
  Card,
  CardBody,
  DatePicker,
  DateValue,
} from '@nextui-org/react';
import React, { useMemo, useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { CiSettings } from 'react-icons/ci';
import { MdCurrencyRupee } from 'react-icons/md';
import CardComponent from './cardComponent';
import { CashFlow } from '@/app/types/Interface';
import BarChartWithMultiXAxis from './barChart';
import PieChartExample from './pieChartDashboard';
import DropdownSelect from './dropdown';
import { DateRangePicker } from '@nextui-org/react';
import SelectComponent from '@/app/components/selectComponent/select';
import { menu } from '@/app/components/selectComponent/data';
// import { PieChartRender } from '@/app/types/Interface';

const items: CashFlow[] = [
  {
    id: 1,
    name: 'Revenue',
    value: 1990000,
  },
  {
    id: 2,
    name: 'Expenses',
    value: 1880000,
  },
  {
    id: 3,
    name: 'Profit',
    value: 1770000,
  },
  {
    id: 4,
    name: 'Total Savings',
    value: 1660000,
  },
  {
    id: 5,
    name: 'Tax Reserves',
    value: 1550000,
  },
];

const generateRandomDataForMonth = (year: number, month: number) => {
  const daysInMonth = new Date(year, month, 0).getDate();
  const data = [];
  for (let i = 1; i <= daysInMonth; i++) {
    data.push({
      name: `${year}-${month}-${i}`, // Assuming format: yyyy-mm-dd
      revenue: Math.floor(Math.random() * 1000),
      expenses: -Math.floor(Math.random() * 1000),
    });
  }
  return data;
};

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState(new Set([menu[0]['value']]));
  const [totalBalance, setTotalBalance] = useState(15050000.0);
  const year = 2024;
  const month = 5; // May
  const data = generateRandomDataForMonth(year, month);
  return (
    <div className="p-4">
      <Card className="bg-blue-800 text-white">
        <CardBody>
          <div className="flex justify-between py-4 px-6">
            <div className="flex flex-col items-center gap-4">
              <p className="font-bold text-large ml-4">Total Balance</p>
              <div className="flex items-center ml-4">
                <div className="mr-2">
                  <MdCurrencyRupee size={20} />
                </div>
                <div className="text-large">{totalBalance}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="cursor-pointer text-black rounded-3xl px-2 border border-black bg-white hover:bg-orange-400 size-fit">
                Today
              </div>
              <div>
                <DateRangePicker
                  label="Select Range"
                  className="max-w-xs"
                  variant="bordered"
                  visibleMonths={2}
                  pageBehavior="single"
                  classNames={{
                    inputWrapper: 'bg-white',
                    label: 'bg-white text-black',
                  }}
                />
                {/* <FaCalendarAlt /> */}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 p-6">
        {items.map((item) => {
          return <CardComponent key={item.id} item={item} />;
        })}
      </div>
      <div>
        <div className="flex justify-between bg-blue-200 rounded-full p-2 cursor-pointer my-6">
          <p className="text-medium font-semibold ml-3">Cash Flow</p>
        </div>
        <Card>
          <CardBody>
            <div className="flex justify-end">
              <div className="bg-blue-100 flex cursor-pointer">
                <DateRangePicker
                  label="Select Range"
                  className="max-w-xs"
                  variant="bordered"
                  showMonthAndYearPickers
                  classNames={{
                    base: 'bg-white',
                    label: 'bg-white text-black',
                  }}
                />
              </div>
            </div>
            <BarChartWithMultiXAxis data={data} />
          </CardBody>
        </Card>
      </div>
      <div>
        <div className="flex justify-between bg-blue-200 rounded-full p-2 cursor-pointer my-6">
          <p className="text-medium font-semibold ml-3">Overall Transactions</p>
        </div>
        <div className="flex">
          <Card fullWidth>
            <CardBody>
              <div className="flex items-center justify-center flex-shrink-0">
                <SelectComponent
                  selectedItem={selectedItem}
                  setSelectedItem={setSelectedItem}
                />

                <div>
                  <DateRangePicker
                    label="Select Range"
                    className="max-w-xs"
                    variant="bordered"
                    visibleMonths={2}
                    pageBehavior="single"
                    classNames={{
                      inputWrapper: 'bg-white',
                      label: 'bg-white text-black',
                    }}
                  />
                </div>
              </div>
              <PieChartExample selectedItem={selectedItem} />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

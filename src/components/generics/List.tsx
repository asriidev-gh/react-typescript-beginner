import React from 'react'

// type ListProps = {
// 	// items: string[] | number[]
// 	items: any[]
// 	onClick: (value: string | number) => void
// }

// or

type ListProps<T> = {
	items: T[]
	onClick: (value: T) => void
}

// const List = ({items, onClick}: ListProps) => {
// const List = <T extends string | number>({items, onClick}: ListProps<T>) => {
// const List = <T extends {}>({items, onClick}: ListProps<T>) => {
const List = <T extends {id: number, first: string, last: string}>({items, onClick}: ListProps<T>) => {
  return (
	<div>
		<h2>List of items</h2>
		{
			items.map((item, index) => {
			return (
				<div key={item.id} onClick={() => onClick(item)}>
					{item.first}
					{console.log("item:",item)}
				</div>
			)
			})
		}
	</div>
  )
}

export default List
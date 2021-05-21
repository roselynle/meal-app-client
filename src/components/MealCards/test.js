import { screen } from '@testing-library/react';
import { DragDropContext } from 'react-beautiful-dnd';
import { MemoryRouter } from 'react-router-dom';
import MealCards from '.';

describe('Meal Cards', () => {
    beforeEach(() => {
        const mealPlan = {
            "day1": "test1",
            "day2": "test2",
            "day3": "test3",
            "day4": "test4",
            "day5": "test5",
            "day6": "test6",
            "day7": "test7"
        }
        render(<DragDropContext><MealCards mealPlan={mealPlan}/></DragDropContext>, { wrapper: MemoryRouter });
    });

    describe('meal cards', () => {
        test('it renders 7 meal cards for each day', () => {
            const div = screen.getAllByRole('day')
            expect(div).toHaveLength(7)
        })
    })
})
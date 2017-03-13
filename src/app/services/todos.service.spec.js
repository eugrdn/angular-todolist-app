describe('Todos factory', () => {
	const todos = [
		{
			title: 'Make coffee 😅',
			created_at: 1489181986308,
			active: false,
			description: "",
			id: "HJcQp9lie"
		},
		{
			title: 'Drink coffee 😋',
			created_at: 1489181998933,
			active: false,
			description: "",
			id: "HJw4a9eol"
		},
		{
			title: 'Do it again! 💫',
			created_at: 1489182011834,
			active: true,
			description: "Do it now!",
			id: "BJVrpqxsx"
		}
	];

	let TodosService;

	beforeEach(angular.mock.module('todoListApp'));

	beforeEach(inject((_TodosService_) => {
		TodosService = _TodosService_;
	}))

	it('should exist', function () {
		expect(TodosService).toBeDefined();
	});

	describe('.getAll()', () => {
		it('should exist', function () {
			expect(TodosService.getAll).toBeDefined();
		});

		it('should return a hard-coded list of todos', function () {
			expect(TodosService.getAll()).toEqual(todos);
		});
	})
});
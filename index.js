const returnFirstTwoDrivers = function (drivers)
{
	return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function (drivers)
{
	return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num)
{
	return (fair) => fair * num
}

function fareDoubler(fair)
{
	const created = createFareMultiplier(2)(fair);
	return created;
}

function fareTripler(fair)
{
	const created = createFareMultiplier(3)(fair);
	return created;
}
function selectDifferentDrivers(drivers, fun)
{
	return (fun(drivers))
}


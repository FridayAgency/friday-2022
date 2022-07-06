import countries from "i18n-iso-countries";
import enLocal from "i18n-iso-countries/langs/en.json";

interface CountrySelectProps {
	onChange: React.ChangeEventHandler;
	selectValue: string;
	name: string;
	htmlId: string;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ onChange, selectValue, name, htmlId }) => {
	countries.registerLocale(enLocal);

	const countryObj = countries.getNames("en", { select: "official" });

	const countryArr = Object.entries(countryObj).map(([key, value]) => {
		return {
			label: value,
			value: key,
		};
	});

	return (
		<select name={name} id={htmlId} value={selectValue} onChange={onChange}>
			{countryArr?.length &&
				countryArr.map(({ label, value }) => (
					<option key={value} value={value}>
						{label}
					</option>
				))}
		</select>
	);
};

export default CountrySelect;

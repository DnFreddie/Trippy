export type Chalange = {
	id: number;
	quote: string;
	author: string;
};

export async function getChalanges(count: number): Promise<Chalange[]> {
	const response = await fetch(`https://dummyjson.com/quotes/?limit=${count}`);

	const data = await response.json();

	const quotes: Chalange[] = data.quotes.map((quoteData: any) => ({
		id: quoteData.id,
		quote: quoteData.quote,
		author: quoteData.author
	}));

	return quotes;
}

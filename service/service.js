const rootURL = process.env.API_ROOT_URL;
const channelToken = process.env.NEXT_PUBLIC_OCM_CHANNELTOKEN;

export async function getCategories() {
  const taxId = process.env.ROOT_TAXONOMY_ID;
  let catList = [];
  await fetch(
    `${rootURL}/taxonomies/${taxId}/categories?channelToken=${channelToken}`
  )
    .then((res) => res.json())
    .then(
      (result) => {
        if (result.items && result.items.length > 0) {
          // setAllItems(result.items)
          for (let i = 0; i < result.items.length; i++) {
            catList.push(result.items[i]);
          }
        }
      },
      (error) => {
        console.error(error);
      }
    );
  return catList;
}

export async function getArticles(catId = "") {
  let articles = [];
  await fetch(
    `${rootURL}/items?q=(type eq "KB-Article" ${
      catId ? ` AND (taxonomies.categories.id eq "${catId}") ` : ""
    })&channelToken=${channelToken}`
  )
    .then((res) => res.json())
    .then(
      (result) => {
        if (result.items && result.items.length > 0) {
          for (let i = 0; i < result.items.length; i++) {
            let articleObj = {};
            articleObj = result.items[i];
            articles.push(articleObj);
          }
        }
      },
      (error) => {
        console.error(error);
      }
    );
  return articles;
}

export async function getArticleById(id) {
  const response = await fetch(
    `${rootURL}/items?q=(type eq "KB-Article" ${
      id ? ` AND (id eq "${id}") ` : ""
    })&channelToken=${channelToken}`
  );
  const article = await response.json();
  return article;
}

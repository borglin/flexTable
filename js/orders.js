var orders = [
  {
    order_id: 1,
    ordernumber: 10001,
    order_reference: "",
    created_date: "2014-05-15T12:34:56+01:00",
    delivery_date: "2014-05-16T00:00:00Z",
    customer: {
      customer_id: 1,
      customer_number: 1,
      customer_reference: "",
      company: "",
      first_name: "John",
      last_name: "Smith",
      shipping_adress: {
        shipping_reference: "",
        adress1: "",
        adress2: "",
        adress3, "",
        postcode: "",
        city: "",
        county: "",
        country: "",
        country_code_iso: "",
        telephone: "",
        mobilephone: "",
        email: "john.smith@domain.com"
      },
      billing_adress: {
        billing_reference: "",
        adress1: "",
        adress2: "",
        adress3, "",
        postcode: "",
        city: "",
        county: "",
        country: "",
        country_code_iso: "",
        telephone: "",
        mobilephone: "",
        email: "john.smith@domain.com"
      }
    },
    order_articles: [
      {
        article_id: 1,
        sku: "123-456",
        article_name: "Product name",
        barcode: "7312034154501",
        ordered_quantity: 4,
        delivered_articles: [
          {
            serial: "10073346523473312",
            quantity: 1
          },
          {
            serial: "10073346523473313",
            quantity: 1
          }
        ],
        allocated_articles: [
          {
            serial: "10073346523473314",
            quantity: 1,
            location_id: 1,
            location: "A1-01-01",
            received_date: "2014-05-02T12:34:56+01:00"
          },
          {
            serial: "10073346523473315",
            quantity: 1,
            location_id: 1,
            location: "A1-01-01",
            received_date: "2014-05-02T12:34:56+01:00"
          }
        ]
      },
      {
        article_id: 2,
        sku: "123-457",
        article_name: "Product name 2",
        barcode: "7312034154502",
        ordered_quantity: 12,
        delivered_articles: [],
        allocated_articles: []
      }    
    ]
  }
]
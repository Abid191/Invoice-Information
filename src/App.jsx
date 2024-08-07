
import { Document, Image, Page, PDFViewer, StyleSheet, Text, View } from '@react-pdf/renderer'
import './App.css'

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  Header: {
    textAlign: 'center',
  },
  divider: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 170,
    borderBottomWidth: 1.5,
    borderBottomColor: 'grey',
    borderBottomStyle: 'dashed',
    width: 200
  },
  // dividerTwo: {
  //   marginTop: 10,
  //   marginBottom: 5,
  //   borderBottomWidth: 1.5,
  //   borderBottomColor: 'grey',
  //   borderBottomStyle: 'dashed',
  // },
  InvoiceDetails: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ImgSection: {
    width: '50%',
  },
  img: {
    width: 140,
    height: 102,

  },
  BillDetails: {
    backgroundColor: '#F7FBFF',
    padding: 20,
    width: '50%',
  },
  BillText: {
    fontSize: 10,
    marginTop: 5
  },
  table: {
    marginTop: 10,
    display: 'table',
    width: 'auto',
    Bottom: 20,
  },

  TableRow: {
    flexDirection: 'row',
  },
  TableColOne: {
    width: 310,
    marginTop: 10,
    backgroundColor: '#EEF6FE',
    height: 'auto',
    padding: 1,
  },
  TableColTwo: {
    width: 100,
    borderStyle: 'solid',
    borderWidth: 1,
    borderTopLeftRadius: 5,
    paddingHorizontal: 20,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottom: 0,
    borderLeftColor: 'grey',
    marginTop: 10,
    backgroundColor: '#EEF6FE',
    height: 'auto',
    padding: 2,
  },
  TableColThree: {
    width: 310,
    height: 'auto',
    padding:2,
  },
  TableColFour: {
    width: 100,
    height: 'auto',
    padding:2,
  },
  TableColFive: {
    width: 310,
    height: 'auto',
    backgroundColor: '#F6F9FC',
    padding:2,
  },
  TableColSix: {
    width: 100,
    backgroundColor: '#F6F9FC',
    height: 'auto',
    padding: 3,
  },
  TableTextOne: {
    width: 200,
    height: 'auto',
    padding: 5,
    fontSize: 9
  },
  TableTextTwo: {
    textAlign: 'center',
    height: 'auto',
    padding: 5,
    fontSize: 7.4
  },
  Payment: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  PaymentDetails: {
    marginTop: 10,
    backgroundColor: '#EEF6FE',
    borderRadius: 10

  },
  PaymentDetailsText: {
    textAlign: 'left',
    paddingRight: 150,
    paddingTop: 5,
    paddingLeft: 5,

  },
  PaymentCol: {
    width: 115,
    marginTop: 10,
    height: 'auto',
    padding: 5,
  },
  TableTextThree: {
    textAlign: 'left',
    height: 'auto',
    padding: 5,
    fontSize: 8
  },
  Condition: {
    marginTop: 20,
  },
  ConditionTwo: {
    textAlign: 'left',
    fontSize: 8,
    marginTop: 10,
  },
  ConditionText: {
    marginTop: 10,
    fontSize: 10,
  },
  footer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 65,
    borderTop: ' 1px solid black',
    width: '100%',
    fontSize: 10,
    marginTop:-20,
    justifyContent: 'space-between',
    marginLeft: 30,
  },
  footerText: {
    fontSize: 8,
    marginTop: 5,
    marginLeft: 0
  },
  pageNumber: {
    fontSize: 8,
    marginTop: 5,
  },
  printDateTime: {
    fontSize: 8,
    marginTop: 5,
  },
})

const MyApp = () => {
  return (
    <PDFViewer width={1200} height={760}>
      <MyDocument></MyDocument>
    </PDFViewer>
  )
}
const MyDocument = () => {
  return (
    <Document title='Invoice'>
      <Page size="A4" style={styles.page}>
        <View>
          <View style={styles.Header}>
            <Text>INVOICE</Text>
          </View>

          <View style={styles.divider} />

          {/* image & Invoice Bill details */}

          <View style={styles.InvoiceDetails}>
            <View style={styles.ImgSection}>
              <Image style={styles.img} src='../src/assets/img/download.jfif'></Image>
            </View>
            <View style={styles.BillDetails}>
              <Text style={styles.BillText}>BILLED TO :</Text>
              <Text style={styles.BillText}>Invoice No : #INV123</Text>
              <Text style={styles.BillText}>Invoice Date : 08/07/2024</Text>
              <Text style={styles.BillText}>Due Date : 08/07/2024</Text>
            </View>
          </View>

          {/* Table Start */}

          <View style={styles.Table}>
            <View style={styles.TableRow}>
              <View style={styles.TableColOne}>
                <Text style={styles.TableTextOne}>Item Description</Text>
              </View>
              <View style={styles.TableColTwo}>
                <Text style={styles.TableTextTwo}>QTY</Text>
              </View>
              <View style={styles.TableColTwo}>
                <Text style={styles.TableTextTwo}>Rate</Text>
              </View>
              <View style={styles.TableColTwo}>
                <Text style={styles.TableTextTwo}>Amount</Text>
              </View>
            </View>

            {/* Table Data */}
            {Array.from({ length: 10 }).map((_, i) => (
              <View key={i} wrap={false} pageBreak="avoid">
                <View style={styles.TableRow}>
                  <View style={styles.TableColThree}>
                    <Text style={styles.TableTextOne}> </Text>
                  </View>
                  <View style={styles.TableColFour}>
                    <Text style={styles.TableTextTwo}>1</Text>
                  </View>
                  <View style={styles.TableColFour}>
                    <Text style={styles.TableTextTwo}>0</Text>
                  </View>
                  <View style={styles.TableColFour}>
                    <Text style={styles.TableTextTwo}>0.00</Text>
                  </View>
                </View>
                <View style={styles.TableRow}>
                  <View style={styles.TableColFive}>
                    <Text style={styles.TableTextOne}> </Text>
                  </View>
                  <View style={styles.TableColSix}>
                    <Text style={styles.TableTextTwo}>1</Text>
                  </View>
                  <View style={styles.TableColSix}>
                    <Text style={styles.TableTextTwo}>0</Text>
                  </View>
                  <View style={styles.TableColSix}>
                    <Text style={styles.TableTextTwo}>0.00</Text>
                  </View>
                </View>
              </View>
            ))}
            {/* <View style={styles.dividerTwo} /> */}

            {/* Payment Details */}

            <View wrap={false} pageBreak="avoid" style={styles.Payment}>
              <View style={styles.PaymentDetails}>
                <View style={styles.PaymentDetailsText}><Text style={styles.TableTextTwo}>Payment Info : ##########</Text></View>
                <View style={styles.PaymentDetailsText}><Text style={styles.TableTextTwo}>Account : ##########</Text></View>
                <View style={styles.PaymentDetailsText}><Text style={styles.TableTextTwo}>A/C Name : ##########</Text></View>
                <View style={styles.PaymentDetailsText}><Text style={styles.TableTextTwo}>Bank Details : ##########</Text></View>
              </View>
              <View style={styles.Table}>
                <View style={styles.TableRow}>
                  <View style={styles.PaymentCol}>
                    <Text style={styles.TableTextThree}>Sub Tota : </Text>
                  </View>
                  <View style={styles.PaymentCol}>
                    <Text style={styles.TableTextThree}>0</Text>
                  </View>
                </View>

                <View style={styles.TableRow}>
                  <View style={styles.PaymentCol}>
                    <Text style={styles.TableTextThree}>Tax(10%) : </Text>
                  </View>
                  <View style={styles.PaymentCol}>
                    <Text style={styles.TableTextThree}>0</Text>
                  </View>
                </View>

                <View style={styles.TableRow}>
                  <View style={styles.PaymentCol}>
                    <Text style={styles.TableTextThree}>Total : </Text>
                  </View>
                  <View style={styles.PaymentCol}>
                    <Text style={styles.TableTextThree}>0.00</Text>
                  </View>
                </View>
              </View>
            </View>


          </View>
          <View wrap={false} pageBreak="avoid" style={styles.Condition}>
            <Text style={styles.ConditionText}>Terms & Conditions</Text>
            <Text style={styles.ConditionTwo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas et veritatis, exercitationem ipsum deleniti blanditiis iste ab perspiciatis. Facere soluta vitae nisi dolores magnam facilis esse incidunt libero nesciunt saepe!</Text>
          </View>
        </View>
        <Footer></Footer>
      </Page>
    </Document>
  )
}

const Footer = () => (
  <View style={styles.footer} fixed >
    <Text style={styles.footerText}>Design and developed by: Walton Group</Text>
    <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => ` ${pageNumber} / ${totalPages}`} />
    <Text style={styles.printDateTime}>Print Date and Time: Monday, 8 July 2024 11: 57: 44 AM</Text>
  </View>
)

export default MyApp

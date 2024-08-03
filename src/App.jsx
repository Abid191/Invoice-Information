
import { Document, Image, Page, PDFViewer, StyleSheet, Text, View } from '@react-pdf/renderer'
import './App.css'

const styles = StyleSheet.create({
  page: {

    padding: 30,
    position: 'relative',
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
  InvoiceDetails: {
    marginTop: 40,
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
  },

  TableRow: {
    flexDirection: 'row',
  },
  TableColOne: {
    width: 310,
    marginTop: 10,
    backgroundColor: '#EEF6FE',
    height: 'auto',
    padding: 5,
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
    padding: 5,
  },
  TableColThree: {
    width: 310,
    height: 'auto',
    padding: 5,
  },
  TableColFour: {
    width: 100,
    height: 'auto',
    padding: 5,
  },
  TableColFive: {
    width: 310,
    height: 'auto',
    backgroundColor: '#F6F9FC',
    padding: 5,
  },
  TableColSix: {
    width: 100,
    backgroundColor: '#F6F9FC',
    height: 'auto',
    padding: 5,
  },
  TableTextOne: {
    width: 200,
    height: 'auto',
    padding: 5,
    fontSize: 10
  },
  TableTextTwo: {
    textAlign: 'center',
    height: 'auto',
    padding: 5,
    fontSize: 10
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
              <View key={i}>
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
            <View style={styles.divider} />
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default MyApp
